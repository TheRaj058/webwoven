import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Our Story</h1>
            <p className="text-xl text-gray-600">
              Building digital excellence through innovation and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-gray-600 mb-4">
                  Web Woven was founded with a vision to help businesses thrive in
                  the digital age. We believe in creating websites that not only
                  look beautiful but also drive results.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experts combines creativity with technical expertise
                  to deliver solutions that exceed expectations.
                </p>
                <Button>Learn More About Us</Button>
              </div>
              <div className="bg-gray-200 h-[400px] rounded-lg">
                {/* Placeholder for company image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-[400px] rounded-lg">
                {/* Placeholder for founder image */}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
                <h3 className="text-xl font-semibold mb-2">Sharad Raj Aryal</h3>
                <p className="text-gray-600 mb-6">
                  With over a decade of experience in web development and digital
                  marketing, Sharad founded Web Woven with a mission to help
                  businesses establish a strong online presence.
                </p>
                <a
                  href="https://www.linkedin.com/in/sharadraj-aryal-91531b167/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Connect on LinkedIn</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;