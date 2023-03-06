import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

export const metadata = {
	title: 'ESCEGIS | VISOR',
	description: 'ESCEGIS visor web',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='es'>
			<body>{children}</body>
		</html>
	)
}
