import { SpeechSynthProvider } from './../SpeechSynthProvider'
import { SpeechSynthUI } from './SpeechSynthUI'

export function SpeechSynth({ text }: { text?: string }) {
  return (
    <SpeechSynthProvider text={text}>
      <SpeechSynthUI />
    </SpeechSynthProvider>
  )
}
