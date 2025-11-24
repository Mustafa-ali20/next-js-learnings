export const metadata = {
    title: 'My Next.js App',
    description: 'A simple Next.js application'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}