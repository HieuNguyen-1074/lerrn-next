import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: ' ',
    description: '',
}
export default function SignLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>   {children}</>
    )
}