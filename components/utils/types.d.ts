import { SetStateAction } from "react"

export interface ProjectModalProps{
  showModal: boolean
  setShowModal?: React.Dispatch<SetStateAction<boolean>>
  closeModal: ()=> void
}