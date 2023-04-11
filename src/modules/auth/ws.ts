
import { IEventBX } from '@/interface/IWS'
import encoding from 'text-encoding'

const decoder = new encoding.TextDecoder()

export const wsStart = (ws: string) => {
    const socket = new WebSocket(ws)

    socket.binaryType = 'arraybuffer'

    socket.onopen = function(e) {
        console.log('WS Соединение установлено')
    }

    socket.onmessage = function(messageEvent) {
        const regex = /..({.+("}|}}|\d}))/gm
        const u8a = new Uint8Array(messageEvent.data)
        const messageStr = decoder.decode(u8a)
        const regexSplice = regex.exec(messageStr)

        if (regexSplice && regexSplice[1]) {
            try {
                let messageJson: IEventBX = JSON.parse(regexSplice[1])
                const eventName = `bx-${messageJson.module_id}-${messageJson.command}`
                const event = new CustomEvent(eventName, {
                    detail: messageJson.params
                });

                document.dispatchEvent(event)
            } catch (e) {
                console.error('ОШИБКА WS ДАННЫХ JSON.parse')
                console.error(messageStr)
                console.error(e)
            }
        } else {
            console.error('ОШИБКА WS ДАННЫХ regex.exec')
            console.error(regexSplice)
            console.error(messageStr)
        }
    }
}