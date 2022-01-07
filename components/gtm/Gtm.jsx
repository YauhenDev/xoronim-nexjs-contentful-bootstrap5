import Script from 'next/script'

export default function Gtm() {

	//debugger; 
	return (
	<>

		<Script 
			strategy="lazyOnload" 
			src="https://www.googletagmanager.com/gtag/js?id=UA-112416631-3" 
		/>
		<Script
			//strategy="afterInteractive"
			strategy="lazyOnload"
			dangerouslySetInnerHTML={{
				__html: `
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-KHMK3T7');
				`,
				/* 
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
				
				https://vc.ru/dev/158627-uskoryaem-rabotu-sayta-na-etape-razrabotki-i-obgonyaem-konkurentov-v-poiske-chast-2
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'UA-112416631-3');

					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(87015504, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
				`, */
			}}
		/>

	</>
	)
}