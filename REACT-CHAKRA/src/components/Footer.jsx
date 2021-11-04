import { Link, Text, VStack } from '@chakra-ui/layout'

export default function Footer() {
  return (
    <VStack as="footer" padding="3rem 1.5rem 6rem" backgroundColor="secondary">

      <Text class="copy">&copy; Copyright 2021</Text>

      <Text class="copy">
        Built with &#x2661; by&ensp;
        <Link color="href" href="https://algo3.uqbar-project.org/" target="_blank">Algo 3 (Unsam)</Link>
      </Text>

    </VStack>
  )
}
