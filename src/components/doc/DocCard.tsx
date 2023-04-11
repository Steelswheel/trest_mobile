import { IDoc } from '@/interface/interface'
import { Text, StyleSheet } from 'react-native'
import { Link } from '@/components/link/Link'
import Icon from 'react-native-vector-icons/FontAwesome'

function getIcon(ext: string) {
    const color = '#8757E8'
    const size = 38

    switch (ext) {
        case 'pdf':
            return <Icon name={'file-pdf-o'} size={size} color={color} />
        case 'doc':
        case 'docx':
            return <Icon name={'file-word-o'} size={size} color={color} />
        case 'xls':
        case 'xlsx':
            return <Icon name={'file-excel-o'} size={size} color={color} />
        default:
            return <Icon name={'file-text-o'} size={size} color={color} />
    }
}

export function DocCard({item}: {item: IDoc}) {
    const { url, ext, name }: IDoc = item

    return (
        <Link url={url} styles={styles.docItem}>
            { getIcon(ext) }
            <Text style={styles.docItemText}>
                { name }
            </Text>
        </Link>
    )
}

const styles = StyleSheet.create({
    docItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 16,
        borderBottomColor: '#F4F4F9',
        borderBottomWidth: 1.5,
        borderStyle: 'solid'
    },
    docItemText: {
        marginLeft: 16,
        fontSize: 15,
        lineHeight: 16
    }
})