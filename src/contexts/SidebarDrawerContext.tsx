import { createContext, ReactNode, useContext, useEffect } from "react"
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"

interface SidebarDrawerProviderProps {
	children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
	const disclosure = useDisclosure()

	console.log(disclosure.isOpen)

	return (
		<SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>
	)
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
