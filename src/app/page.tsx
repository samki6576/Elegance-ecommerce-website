"use client"; // Mark this file as a client component


import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, ShoppingCart, Heart, User, Menu, ChevronRight, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Data
const categoryImages = {
  Women: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
  Men: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  Accessories: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBhY2Nlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
  Footwear: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D",
};

const products = [
  {
    name: "Classic White Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hbWUlM0ElMjAlMjJTbGltJTIwRml0JTIwSmVhbnMlMjIlMkN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fExlYXRoZXIlMjBDcm9zc2JvZHklMjBCYWd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Minimalist Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d0FUQ0h8ZW58MHx8MHx8fDA%3D",
  },
];

// Theme Toggle Component
function ThemeToggle() {
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      {document.documentElement.classList.contains("dark") ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">ELEGANCE</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Shop
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Categories
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-full max-w-sm items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-full bg-background pl-8 md:w-[300px] lg:w-[300px]"
              />
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="#" aria-label="Account">
                <User className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
              </Link>
              <Link href="#" className="relative" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  3
                </span>
              </Link>
              {/* Mobile Menu Toggle */}
              <label htmlFor="mobile-menu-toggle" className="md:hidden">
                <Button variant="ghost" size="icon" asChild>
                  <div>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </div>
                </Button>
              </label>
              <input type="checkbox" id="mobile-menu-toggle" className="hidden" />
              <div className="mobile-menu hidden md:hidden absolute top-16 left-0 right-0 bg-background border-t">
                <nav className="flex flex-col p-4 gap-4">
                  <Link href="#" className="text-sm font-medium hover:text-primary">Home</Link>
                  <Link href="#" className="text-sm font-medium hover:text-primary">Shop</Link>
                  <Link href="#" className="text-sm font-medium hover:text-primary">Categories</Link>
                  <Link href="#" className="text-sm font-medium hover:text-primary">About</Link>
                  <Link href="#" className="text-sm font-medium hover:text-primary">Contact</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[500px] md:h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1586902197503-e71026292412?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-20 flex items-center justify-center text-center"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-white">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Discover Your Style</h1>
                <p className="max-w-[700px] text-lg md:text-xl">
                  Explore our curated collection of premium fashion and accessories.
                </p>
                <div className="space-x-4">
                  <Button size="lg" className="rounded-full">
                    Shop Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-black"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop by Category</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Browse our wide selection of products across different categories.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              {(["Women", "Men", "Accessories", "Footwear"] as (keyof typeof categoryImages)[]).map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={categoryImages[category]}
                      alt={category}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h3 className="text-xl font-medium text-white">{category}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Discover our most popular items loved by customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {products.map((product, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="group relative bg-background rounded-lg overflow-hidden border shadow-sm"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-primary font-bold mt-1">${product.price}</p>
                    <Button className="w-full mt-3 rounded-full">Add to Cart</Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="rounded-full">
                View All Products <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New Arrivals</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">The latest additions to our collection.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800&auto=format&fit=crop&q=60"
                    alt="New Collection"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-bold">Summer Collection</h3>
                    <p className="mt-2">Refresh your wardrobe with our latest summer styles</p>
                    <Button className="mt-4 rounded-full bg-white text-black hover:bg-white/90">Shop Now</Button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60"
                    alt="Limited Edition"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-bold">Limited Edition</h3>
                    <p className="mt-2">Exclusive pieces available for a limited time only</p>
                    <Button className="mt-4 rounded-full bg-white text-black hover:bg-white/90">Explore</Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Read testimonials from our satisfied customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  name: "Sarah Johnson",
                  text: "I absolutely love the quality of the clothes. The attention to detail is amazing and the fit is perfect!",
                },
                {
                  name: "Michael Chen",
                  text: "Fast shipping and excellent customer service. The products exceeded my expectations. Will definitely shop here again!",
                },
                {
                  name: "Emma Williams",
                  text: "The selection is fantastic and the prices are reasonable for the quality you get. My new favorite online store!",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-background p-6 rounded-lg border shadow-sm">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <div className="flex text-yellow-400">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Subscribe to our newsletter for exclusive offers and updates on new arrivals.
              </p>
              <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Enter your email" className="rounded-full" />
                <Button className="rounded-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold">ELEGANCE</span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Your destination for premium fashion and accessories.
              </p>
              <div className="flex space-x-4 mt-4">
                {["Twitter", "Facebook", "Instagram", "YouTube"].map((social) => (
                  <Link key={social} href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">{social}</span>
                    <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center border">
                      {social[0]}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                {["Women", "Men", "Accessories", "Footwear", "New Arrivals", "Sale"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "About Us",
                  "Careers",
                  "Store Locations",
                  "Our Responsibility",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                {["Contact Us", "FAQs", "Shipping & Returns", "Size Guide", "Track Order", "Gift Cards"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ELEGANCE. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Image src="/placeholder.svg?height=30&width=50&text=Visa" alt="Visa" width={50} height={30} />
              <Image
                src="/placeholder.svg?height=30&width=50&text=Mastercard"
                alt="Mastercard"
                width={50}
                height={30}
              />
              <Image src="/placeholder.svg?height=30&width=50&text=PayPal" alt="PayPal" width={50} height={30} />
              <Image src="/placeholder.svg?height=30&width=50&text=Apple Pay" alt="Apple Pay" width={50} height={30} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}