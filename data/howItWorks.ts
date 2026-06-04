import { Data } from "@/types"// in your data file
import { Upload, Cpu, CheckCircle } from "lucide-react"

export const howItWorks: Data[] = [
  {
    step: 1,
    icon: Upload,
    label: "Upload or paste your contract",
    longDescription: "Drop in a PDF, DOCX, or paste the text directly.",
  },
  {
    step: 2,
    icon: Cpu,
    label: "AI reads every clause",
    longDescription: "Our AI analyzes the full document in seconds.",
  },
  {
    step: 3,
    icon: CheckCircle,
    label: "Review your results",
    longDescription: "Plain English, risks flagged, key clauses extracted.",
  }
]