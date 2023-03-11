import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata = {
	title: 'ESCEGIS | VISOR',
	description: 'ESCEGIS visor web',
}

export default function RootLayout({
	children,
}: {
	// eslint-disable-next-line no-undef
	children: React.ReactNode
}) {
	return (
		<html lang='es'>
			<body>{children}</body>
		</html>
	)
}
