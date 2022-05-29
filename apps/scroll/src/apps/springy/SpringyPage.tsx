import styled from '@emotion/styled';
import { Keyframes, Scroll } from 'scrollex';

const springs = {
  translateY: {
    damping: 100,
    stiffness: 1200,
    mass: 8,
  },
};

const keyframes: Record<string, Keyframes> = {
  container: ({ maxScrollPosition }) => ({
    0: {
      translateY: 50,
    },
    [maxScrollPosition]: {
      translateY: -50,
    },
  }),
  galleryImage: ({ section, data }) => ({
    [section.topAt('container-top')]: {
      translateZ: 0,
    },
    [section.bottomAt('container-bottom')]: {
      translateZ: 510,
    },
  }),
  section: ({ data, section, container }) => ({
    [section.topAt('container-bottom')]: {
      translateY: 35,
      opacity: 0,
    },
    [section.topAt('container-top') - 100]: {
      translateY: 35,
      opacity: 0,
    },
    [section.topAt('container-top') + 100]: {
      translateY: 35,
      opacity: 0,
    },
    [section.bottomAt('container-top')]: {
      translateY: -35,
      opacity: 1,
    },
  }),
  item: ({ data }) => ({
    [data.index * 400]: {
      opacity: 0,
      translateY: 40,
    },
    [data.index * 400 + 1]: {
      opacity: 1,
      translateY: 0,
    },
  }),
};

const items = [
  '온전히 빠져들게 하는\n액티브 노이즈 캔슬링.',
  '주변의 소리를 들려주는\n주변음 허용 모드.',
  '온종일 편안한 맞춤형 핏.',
  '새롭게 귓가를 찾아온 매혹.',
];

export const SpringyPage = () => {
  return (
    <Wrapper>
      <Container scrollAxis="y">
        <Section showOverflow>
          <Center>
            <Scroll.Item>
              <Stack>
                {items.map((item, index) => {
                  return (
                    <ScrollItem key={item} keyframes={keyframes.item} springs={springs} data={{ index }}>
                      <Heading>{item}</Heading>
                    </ScrollItem>
                  );
                })}
              </Stack>
            </Scroll.Item>
          </Center>
        </Section>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled(Scroll.Container)`
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const Section = styled(Scroll.Section)`
  border-bottom: 1px solid #fff;
  height: 300vh;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  height: 100vh;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollItem = styled(Scroll.Item)``;

const Heading = styled.h2`
  font-size: 64px;
  text-align: center;
  white-space: pre-line;
`;
