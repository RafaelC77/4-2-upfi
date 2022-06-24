import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w="auto" h="auto" maxW="900px" maxH="600px">
        <ModalBody p={0}>
          <Image src={imgUrl} maxW="900px" maxH="600px" />
        </ModalBody>

        <ModalFooter bgColor="pGray.800" borderBottomRadius={4}>
          <Flex justify="start" h="100%" w="100%">
            <Link href={imgUrl} isExternal>
              Abrir original
            </Link>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
