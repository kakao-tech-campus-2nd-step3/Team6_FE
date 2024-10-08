export type Friend = {
  friendId: number
  name: string
  imageUrl: string
  isFriend: boolean
}

export type Group = {
  groupdId: number
  groupName: string
  groupdImageUrl: string
  groupDescription: string
  groupMemberCount: number
}

export interface ChatItem {
  chatId: number
  direction: 'left' | 'right'
  content: string
  createdAt: string
}

export interface ChatBoxProps {
  chatItem: ChatItem
}

export interface QuestionItem {
  profileQuestionId: number
  profileQuestionContent: string
  createdAt: string
}
