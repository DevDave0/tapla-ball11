import { Calendar, Clock, MapPin } from "lucide-react"
import jinwon from "../assets/img/IMG_3845.JPG"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">Overview</span>
                </h2>
                <img src={jinwon} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-muted-foreground">
                            We've had a lot of great fellowship and exercise through the years and want to continue to build a stronger community within this church body by using basketball to glorify Him! This year, all proceeds will contribute to fundraising for medical missions teams to the Middle East and Guatemala! Thank you so much for partnering with us to send our church to be the salt and light! 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="https://www.tapestry.la/" className="cosmic-button">Check out Tapestry LA!</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Where: Terasaki Budokan</h4>
                                    <p className="muted-foreground">249 S Los Angeles St, Los Angeles, CA 90012</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Calendar className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">When: June 29, 2025 - September 11, 2025</h4>
                                    <p className="muted-foreground">(every Sunday for 11 weeks, NO games on 8/24 and 8/31)</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Clock className="h-6 w-6 text-primary" /> 
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Time: 3:00 PM - 5:30 PM games</h4>
                                    <p className="muted-foreground">(w/ possibility of a Bye)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}