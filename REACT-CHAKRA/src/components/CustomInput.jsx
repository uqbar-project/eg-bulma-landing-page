import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'

const InlineInput = ({ Icon, placeholder, label }) => (
  <>
    <Text fontWeight="bold">{label}</Text>

    <InputGroup marginTop={2}>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon color="gray.300" />}
      />

      <Input
        placeholder={placeholder}
        focusBorderColor="pink.300"
      />
    </InputGroup>
  </>
)

const TextAreaInput = ({ placeholder, label }) => (
  <>
    <Text fontWeight="bold">{label}</Text>
    <Textarea
      marginTop={2}
      placeholder={placeholder}
      focusBorderColor="pink.300"
    />
  </>
)

export default function CustomInput({ Icon, placeholder, label, type }) {
  return (
    <Box width="100%">
      {type === 'textarea' ? (
        <TextAreaInput placeholder={placeholder} label={label} />
      ) : (
        <InlineInput Icon={Icon} placeholder={placeholder} label={label} />
      )}
    </Box>
  )
}
