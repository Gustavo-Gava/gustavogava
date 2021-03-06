import { Flex, Icon, Box, Text, FlexProps } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"

import { NormalText } from "../Text/NormalText"

import { Fade, Slide } from "react-awesome-reveal"

interface TechCardProps extends FlexProps {
	title: string
	color: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	children: string
}

export function TechCard({ title, color, icon: Icon, children, ...rest }: TechCardProps) {
	const controls = useAnimation()

	return (
		<Box as={Fade}>
			<Flex
				w={320}
				h={300}
				p="6"
				flexDir="column"
				alignItems="flex-start"
				bgColor="gray.800"
				borderBottomWidth={10}
				borderBottomColor={color}
				borderBottomStyle="solid"
				borderRadius="8"
				boxShadow="0 1.6rem 2.4rem rgb(0 0 0 / 25%);"
				as={motion.div}
				animate={controls}
				onMouseEnter={() => controls.start({ y: "-30px" })}
				onMouseLeave={() => controls.start({ y: "0px" })}
				initial={false}
				{...rest}
			>
				<Box borderRadius="full" p="4" mb="4" backgroundColor={`${color}CC`}>
					<Icon width={34} height={34} />
				</Box>

				<Text as="h2" fontSize="1xl" fontWeight="bold">
					{title}
				</Text>

				<NormalText>{children}</NormalText>
			</Flex>
		</Box>
	)
}
