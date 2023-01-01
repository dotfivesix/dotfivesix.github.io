import ServiceCard from "../components/ServiceCard";

export default function Services() {
    return (
      <section id="services" className="flex justify-center bg-neutral-100 py-20">
        <div className="px-8 md:px-12 max-w-7xl w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:gap-16 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="heading mb-2 text-center sm:text-start">Services</h2>
              <p className="paragraph text-justify">E-commerce to Personal Websites, or Portfolio to Landing Pages, any type of website you want.. You an check out my fiverr account for available services. My websites and services include :</p>
            </div>
            <a className="flex flex-row items-center ml-auto md:ml-0 gap-1 text-2xl font-bold text-white py-3 px-6 w-min h-min rounded-md color-button cursor-pointer" target="_blank" href="https://www.fiverr.com/dotfivesix">Fiverr</a>
          </div>
          <ul className="my-10 flex flex-col gap-6 items-center justify-between lg:flex-row lg:flex-wrap lg:items-start">
            <ServiceCard alignment="right" illustration="/images/illustrations/cross-browser.svg" alt="browsers-illustration" title="Cross-Browser Compatibility" description="From Chrome to Firefox, or Opera to Safari, a website that works anywhere." />
            <ServiceCard alignment="left" illustration="/images/illustrations/design-to-website.svg" alt="design-illustration" title="Any Design to Website" description="Figma, PSD, XD, PNG or any format having design to a responsive website." />
            <ServiceCard alignment="right" illustration="/images/illustrations/dark-mode-integration.svg" alt="theme-illustration" title="Dark Theme Integration" description="Some Users Prefer Dark Theme and Some Light, It’s better to have both." />
            <ServiceCard alignment="left" illustration="/images/illustrations/fast-loading.svg" alt="speed-illustration" title="Fast Loading Times" description="Faster Loading With Minified CSS and JS Bundles, and modern techniques." />
            <ServiceCard alignment="right" illustration="/images/illustrations/modern-ui.svg" alt="ui-illustration" title="Modern UI and Typography" description="Improving the user experience and make the site more visually appealing." />
            <ServiceCard alignment="left" illustration="/images/illustrations/revisions.svg" alt="files-illustration" title="Revisions and Source Files" description="Need some adjustments or source files ? No problem here." />
          </ul>
        </div>
      </section>
    )
  }