'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

import { StyledComponentsRegistry } from 'lib/registry';
import { LayoutContainer } from 'resources/components';
import { Footer, Header } from 'resources/sections';

import { LayoutRoot, LayoutHead, LayoutBody, LayoutFoot, GlobalStyles } from './RootLayout-styles';

const queryClient = new QueryClient();

export const RootLayout = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <html lang="ru">
                    <Head>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                    </Head>
                    <body>
                        <StyledComponentsRegistry>
                            <GlobalStyles />

                            <LayoutRoot>
                                <LayoutHead>
                                    <LayoutContainer>
                                        <Header />
                                    </LayoutContainer>
                                </LayoutHead>

                                <LayoutBody>{children}</LayoutBody>

                                <LayoutFoot>
                                    <Footer />
                                </LayoutFoot>
                            </LayoutRoot>
                        </StyledComponentsRegistry>
                        <div id="mobile-menu" />
                    </body>
                </html>
            </RecoilRoot>
        </QueryClientProvider>
    );
};
