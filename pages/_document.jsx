import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
	<Html>
		<Head>
			<script dangerouslySetInnerHTML={{__html: `
<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
<!-- End Google Tag Manager -->
<!-- Yandex.Metrika counter -->
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

<!-- /Yandex.Metrika counter -->`,}}
			/>
		</Head>
		<body>
			<noscript>
				<iframe 
					src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
					height="0" 
					width="0" 
					style={{ display: 'none', visibility: 'hidden' }}
				/>
				<div>
					<img src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YM}`}
					style={{position: 'absolute', left: '-9999px'}} 
					alt="" />
				</div>
			</noscript>
			<Main />
			<NextScript />
		</body>
	</Html>
	)
}