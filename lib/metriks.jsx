export const sendMetrik = (type, value) => {
	ym(process.env.NEXT_PUBLIC_YM, type, value);
}