export function SpeechSynthButton({
  handler = () => {},
  children,
}: {
  handler: () => void
  children?: JSX.Element | string
}) {
  return (
    <button
      className='react-speech-synth_button bg-stone-200 px-6 py-2 rounded-full'
      onClick={handler}
    >
      {children}
    </button>
  )
}
