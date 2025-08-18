export default function Container({ className = '', children }) {
  return (
    <div className={`w-full mx-auto max-w-[1000px] px-3 md:px-4 ${className}`}>
      {children}
    </div>
  )
}
