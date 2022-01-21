 
import { useWindowDimensions } from 'hooks/useWindowDimensions'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'

export const Navigation = () => {
	const { width } = useWindowDimensions()
	const responsiveWidth = 1000

	const determineDimension = () => {
		return width <= responsiveWidth
			? <MobileNavigation />
			: <DesktopNavigation />
	}

	return determineDimension()
}