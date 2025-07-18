import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Phone,
  Mail,
  MapPin,
  Car,
  Beaker,
  Code,
  Fuel,
  Building,
  Target,
  Eye,
  Home,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center space-x-2">
          <Image
            src="/logo.png"
            width={60}
            height={32}
            alt="Keerthi Group Logo"
            className="h-8 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#divisions" className="text-sm font-medium hover:underline underline-offset-4">
            Divisions
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#leadership" className="text-sm font-medium hover:underline underline-offset-4">
            Leadership
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                  Since 1986 • Multi-Industry Excellence
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  KEERTHI GROUP
                </h1>
                <p className="text-xl md:text-2xl font-medium text-primary mb-4">Excellence in Every Endeavor</p>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A distinguished leader in industrial, FMCG, and automobile sectors, renowned for quality and customer
                  satisfaction. From chemicals to motorcycles, software to lubricants - we deliver innovative solutions
                  that enhance everyday lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section id="divisions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Divisions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Diverse portfolio spanning multiple industries, each committed to excellence and innovation.
                </p>
              </div>
            </div>

            <Tabs defaultValue="triumph" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8 sticky top-16 z-40 bg-white/90 backdrop-blur overflow-x-auto whitespace-nowrap">
                <TabsTrigger value="triumph">Automobiles</TabsTrigger>
                <TabsTrigger value="chemicals">Chemicals</TabsTrigger>
                <TabsTrigger value="distributions">Distributions</TabsTrigger>
                <TabsTrigger value="fuel-outlet">Fuel Outlet</TabsTrigger>
                <TabsTrigger value="real-estate">Real Estate</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
              </TabsList>

              <TabsContent value="triumph" className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 md:gap-4">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Car className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-2xl font-bold">Keerthi Triumph</h3>
                          <Badge variant="secondary">Oldest & Largest Triumph Dealership in India</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Ultra-modern showroom with integrated after-sales service facility featuring the global
                        signature Triumph Motorcycles layout. Unique 'Build your own Bike' concept in the premium
                        motorcycle segment.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">International standards of sales & service</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Complete range of Triumph merchandise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">4 Strategic locations across Bangalore</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold">Locations:</p>
                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <span>• Residency Road</span>
                          <span>• JP Nagar</span>
                          <span>• HBR Layout</span>
                          <span>• Mysore</span>
                        </div>
                        <p className="text-sm mt-4">
                          <Phone className="h-4 w-4 inline mr-2" />
                          +91 9986665565
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-8 flex items-center justify-center">
                      <Image
                        src="/triumph.jpg"
                        width="400"
                        height="300"
                        alt="Keerthi Triumph Showroom"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="chemicals" className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 md:gap-4">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Beaker className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-2xl font-bold">Keerthi Chemicals</h3>
                          <Badge variant="secondary">5 Decades of Excellence</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Pioneer in Inorganic Chemicals with 50+ years of manufacturing Sulphuric Acid. Leading producer
                        serving batteries, textiles, refineries, and more.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">100 MTPD production capacity</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Dedicated SS316L tanker fleet</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Battery Grade Sulphuric Acid specialist</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold">Key Clients:</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <span>• Exide Industries Ltd, Hosur</span>
                          <br />
                          <span>• Amararaja Batteries Ltd, Thirupathi</span>
                          <br />
                          <span>• Exide Batteries, Bangalore</span>
                          <br />
                          <span>• Power Build Batteries Ltd</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-8 flex items-center justify-center">
                      <Image
                        src="/chemicals.jpg"
                        width="400"
                        height="300"
                        alt="Keerthi Chemicals Plant"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="software" className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 md:gap-4">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Code className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-2xl font-bold">Xenon</h3>
                          <Badge variant="secondary">Future of Dealership Management</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Cutting-edge SaaS platform with intuitive dashboard transforming dealership operations.
                        Real-time inventory tracking, seamless vehicle monitoring, and optimized day-to-day operations.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Real-time inventory management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Seamless vehicle monitoring</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Scalable & innovative design</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Global expansion ready</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Designed for precision and efficiency, managing every vehicle's journey from stockyard to
                        customer.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-8 flex items-center justify-center">
                      <Image
                        src="/xenon.png"
                        width="400"
                        height="300"
                        alt="Xenon Software Dashboard"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="fuel-outlet" className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 md:gap-4">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Fuel className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-2xl font-bold">Keerthi Service Station</h3>
                          <Badge variant="secondary">IOC Authorized</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Established in 1979 on Old Madras Road, this flagship outlet is among IOC's highest volume dealers,
                        moving 1000–1200 KL of diesel every month. Recognized with Chairman's Club and Gold Circle honors,
                        the station also stocks SERVO lubricants across nine districts.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">1000–1200 KL diesel sales monthly</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Chairman's Club & Gold Circle member</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Servo industrial stockist for 9 districts</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">30,000 sq ft C&F facility</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-8 flex items-center justify-center">
                      <Image
                        src="/kss.jpg"
                        width="400"
                        height="300"
                        alt="Keerthi Service Station"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="real-estate" className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 md:gap-4">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Home className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-2xl font-bold">Keerthi Estates</h3>
                          <Badge variant="secondary">Coming Soon</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Upcoming residential and commercial projects blending modern design with eco-friendly practices to
                        redefine urban living in Bangalore.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Modern architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Eco-friendly materials</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Premium amenities</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-8 flex items-center justify-center">
                      <Image
                        src="/realestate.jpg"
                        width="400"
                        height="300"
                        alt="Keerthi Estates Illustration"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="distributions" className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 md:gap-4">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Building className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-2xl font-bold">Keerthi & Co</h3>
                          <Badge variant="secondary">Servo & Retail Distributor</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Appointed Servo stockist in 2002 for Bangalore East and Kolar, the company now supplies over 100 KL
                        of lubricants monthly and operates one of Bangalore's top Indian Oil outlets. It also distributes Ray
                        Ban eyewear across South Karnataka and Ceat tyres for Chikkaballapur district.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Servo automotive lubricant stockist</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Ray Ban & Vogue eyewear distributor</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Ceat tyre distributor since 2022</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Top 10 Indian Oil dealer in Bangalore</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Serving bazaar shops, OEs and retail outlets with a focus on timely deliveries and customer
                        satisfaction.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-8 flex items-center justify-center">
                      <Image
                        src="keerthi&co.jpg"
                        width="400"
                        height="300"
                        alt="Keerthi & Co Distribution"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 md:gap-4">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Building className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-2xl font-bold">Binary INC</h3>
                          <Badge variant="secondary">HPCL Authorized Distributor</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Authorized distributor of HPCL lubricants in Bangalore, focusing on supply and distribution of
                        high-quality lubricating oils and greases for automotive and industrial applications.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Extensive HPCL product range</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Expert guidance & consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Timely delivery guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Eco-friendly practices</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Serving Bangalore Urban and Rural areas with educational workshops and continuous service
                        improvement.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-8 flex items-center justify-center">
                      <Image
                        src="/binary.png"
                        width="400"
                        height="300"
                        alt="Binary INC Lubricants"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize the industrial and automotive landscape by seamlessly connecting customers with
                    innovative FMCG solutions and exceptional vehicles, fostering sustainable growth and empowering
                    communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to deliver unparalleled value and service by offering a curated selection of
                    high-quality industrial products and automobiles. We aim to enhance customer experience through
                    transparency, innovation, and responsiveness, while championing sustainability and supporting local
                    economies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    Since 1986
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Keerthi Group</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Keerthi Group, based in Bangalore, is a distinguished leader in the industrial, FMCG, and automobile
                    sectors, renowned for its commitment to quality and customer satisfaction. With a rich legacy of
                    excellence, we strive to deliver innovative solutions that enhance everyday lives while fostering
                    sustainable practices.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
                    As part of our expansion, we are excited to announce our upcoming real estate projects that aim to
                    redefine urban living in Bangalore. These developments will blend modern design with eco-friendly
                    practices, creating vibrant spaces that cater to contemporary lifestyles.
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="Keerthi Group Heritage"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Leadership Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Meet the visionary leaders driving Keerthi Group's success across multiple generations.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>L.N. Munirathna Setty</CardTitle>
                  <CardDescription>Founder & Visionary</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Established KEERTHI Group in 1986, beginning with chemical trading and manufacturing. His
                    entrepreneurial spirit and leadership laid the foundation for the group's remarkable growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>L.N. Prakash Gupta</CardTitle>
                  <CardDescription>Fuel Retail Pioneer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Secured the petroleum dealership in 1979–80 and built the Old Madras Road outlet into a top-performing
                    IOC service station honored with Chairman's Club recognition.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Sanjay M</CardTitle>
                  <CardDescription>Managing Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Returned from Arizona in 1992, took over sulphuric acid manufacturing, and led expansion into
                    automobile dealerships. Under his leadership, KEERTHI became India's oldest and largest Triumph
                    dealership.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Karthik P Gupta</CardTitle>
                  <CardDescription>Director, Keerthi & Co</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Leads Keerthi & Co's lubricant and retail businesses, growing sales from 40 to 100 KL per month and
                    overseeing Ray Ban and Ceat distribution across South Karnataka.
                  </p>
                </CardContent>
              </Card>


              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Pranav Guptha</CardTitle>
                  <CardDescription>Business Administration Graduate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Studied at Swansea University, Wales. Manages sales, service, and customer relations for Triumph
                    Motorcycles and oversees HPCL lubricants distribution across Bangalore.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Pratul Gupta</CardTitle>
                  <CardDescription>Founder, Xenon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Computer Engineering graduate from University of Illinois, Chicago. Founded Xenon in 2023,
                    developing innovative SaaS solutions for automobile dealership operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Roopashri Sanjay</CardTitle>
                  <CardDescription>Administrative Operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Microbiology background bringing organizational skills and academic expertise to support business
                    management and ensure smooth administrative operations.
                  </p>
                </CardContent>
              </Card>

              
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Shilpa Karthik</CardTitle>
                  <CardDescription>Finance &amp; Accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Diligently manages accounting and finances for Keerthi Service Station,
                    providing the meticulous oversight that keeps operations compliant and efficient.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Padma M</CardTitle>
                  <CardDescription>Foundation & Support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Steadfast presence and support system for the family and business. Her dedication has been vital in
                    maintaining the foundation that allows the group to focus on expansion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to partner with Keerthi Group? We'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>helpdesk@keerthi.co.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      Instagram
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Company Name" />
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help you?"
                    rows={4}
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KEERTHI GROUP. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          
        </nav>
      </footer>
    </div>
  )
}
