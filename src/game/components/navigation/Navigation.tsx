 
import { useWindowDimensions } from 'hooks/useWindowDimensions'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { MOBILE_NAV_THRESHOLD } from '../../../shared/style/Constants'

export const Navigation = () => {
	const { width } = useWindowDimensions()

	const determineDimension = () => {
		return width <= MOBILE_NAV_THRESHOLD
			? <MobileNavigation />
			: <DesktopNavigation />
	}

	return determineDimension()
}