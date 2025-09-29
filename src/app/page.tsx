"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import MewFooter from '@/components/sections/layouts/footer/MewFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759135216657-3788f4a1.jpg"
          buttonText="Buy MEME"
          onButtonClick={() => console.log('Buy MEME')}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <CyclopsHero
          title="Welcome to MemePulse"
          subtitle="Join the memecoin revolution"
          characterImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759135207240-b6bbe84b.jpg"
          characterImageAlt="MemePulse mascot"
          primaryButtonText="Buy MEME"
          onPrimaryButtonClick={() => console.log('Buy MEME')}
          secondaryButtonText="Learn More"
          onSecondaryButtonClick={() => console.log('Learn More')}
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About MemePulse"
          descriptions={[
            "MemePulse is the fun, vibrant memecoin that brings clarity to the buying process.",
            "Join us in a community where every transaction is a step towards revolutionizing the memecoin market!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          steps={[
            { position: "1", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759135209270-54976512.jpg", title: "Connect Your Wallet", description: "Use a supported wallet to connect to our platform." },
            { position: "2", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759135210897-16188c62.jpg", title: "Choose Your Amount", description: "Select the amount of MEME you wish to purchase." },
            { position: "3", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759135213224-215afc45.jpg", title: "Confirm and Buy", description: "Confirm the transaction to buy your MEME tokens." }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="MemePulse operates on a transparent tokenomics model that keeps our community informed."
          kpiItems={[
            { value: "1 Billion", description: "Total Supply", icon: "Users" },
            { value: "50%", description: "Liquidity", icon: "PiggyBank" },
            { value: "10%", description: "Team Allocation", icon: "Users" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <MewFooter
          title="MemePulse" 
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759135215170-9b9e6ed2.jpg"
          imageAlt="MemePulse logo"
          socialLinks={[
            { platform: "Twitter", onClick: () => console.log('Twitter') },
            { platform: "Telegram", onClick: () => console.log('Telegram') },
            { platform: "Discord", onClick: () => console.log('Discord') },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}