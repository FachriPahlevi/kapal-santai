export default function Container({ className = '', children }) {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  )
}
