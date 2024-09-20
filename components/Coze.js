import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * Coze-AI机器人
 * @returns
 */
export default function Coze() {
  const cozeSrc = siteConfig(
    'COZE_SRC_URL',
    'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.6/libs/cn/index.js'
  )
  const title = siteConfig('COZE_TITLE', 'NotionNext助手')
  const botId = siteConfig('COZE_BOT_ID')

  const loadCoze = async () => {
    await loadExternalResource(cozeSrc)
    CozeWebSDK = window.CozeWebSDK
    if (CozeWebSDK) {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: botId
        },
        componentProps: {
          title: title
        }
      })
    }
  }

  useEffect(() => {
    if (!botId) {
      return
    }
    loadCoze()
  }, [])
  return <></>
}