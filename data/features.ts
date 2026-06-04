import { Data } from "@/types"
import { FileText, AlertTriangle, Key, MessageCircleQuestion } from "lucide-react"

const features: Data[] = [
    {
        label: "Plain English summaries",
        shortDescription: 'No legalese, ever',
        longDescription:
            'Dense legal language translated into clear, everyday English. Understand what you\'re agreeing to instantly.',
        icon: FileText,
    },

    {
        label: "Risk highlights",
        shortDescription: 'Know what to watch for',
        longDescription:
            'Problematic clauses flagged automatically - indemnity traps, unfair termination terms, hidden obligations.',
        icon: AlertTriangle,
    },

    {
        label: "Key clause extraction",
        shortDescription: 'What actually matters',
        longDescription:
            'The clauses that actually matter payment terms, termination rights, liability caps - surfaced immediately.',
        icon: Key,
    },

    {
        label: "Ask questions",
        shortDescription: 'Chat your contract',
        longDescription:
            'Chat directly with your contract. "Can my landlord raise rent?" "What happens if I leave early?" Answered instantly.',
        icon: MessageCircleQuestion,
    }
]

export default features