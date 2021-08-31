import { FormattedMessage } from "react-intl";

const links = [
    {
        category: <FormattedMessage id="footer.explore" defaultMessage="Explore" />,

        links: [
            {
                link: <FormattedMessage id="footer.company" defaultMessage="Company" />,
                to: "/company"
            },
            {
                link: <FormattedMessage id="footer.cars" defaultMessage="Our cars" />,
                to: "/ourcars"
            },
            {
                link: <FormattedMessage id="footer.downloadapp" defaultMessage="Download app" />,
                to: "/downloadapp"
            },
            {
                link: <FormattedMessage id="footer.featured" defaultMessage="Featured" />,
                to: "/featured"
            },
            {
                link: <FormattedMessage id="footer.booking" defaultMessage="Check Booking" />,
                to: "/booking"
            },
            {
                link: <FormattedMessage id="footer.blog" defaultMessage="Blog" />,
                to: "/blog"
            }
        ]
    },
    {
        category: <FormattedMessage id="footer.services" defaultMessage="Services" />,
        links: [
            {
                link: <FormattedMessage id="footer.packages" defaultMessage="Packages" />,
                to: "/packages"
            },
            {
                link: <FormattedMessage id="footer.ride" defaultMessage="Ride" />,
                to: "/ride"
            },
            {
                link: <FormattedMessage id="footer.drive" defaultMessage="Drive" />,
                to: "/drive"
            },
            {
                link: <FormattedMessage id="footer.bdriver" defaultMessage="Become a driver" />,
                to: "/bdriver"
            },
            {
                link: <FormattedMessage id="footer.reservation" defaultMessage="Reservation" />,
                to: "/reservation"
            },
            {
                link: <FormattedMessage id="footer.tfnder" defaultMessage="Taxi Finder" />,
                to: "/tfnder"
            }
        ]
    },
    {
        category: <FormattedMessage id="footer.about" defaultMessage="About" />,
        links: [
            {
                link: <FormattedMessage id="footer.aboutus" defaultMessage="About us" />,
                to: "/aboutus"
            },
            {
                link: <FormattedMessage id="footer.taxi" defaultMessage="Taxi" />,
                to: "/taxi"
            },
            {
                link: <FormattedMessage id="footer.places" defaultMessage="Places" />,
                to: "/places"
            },
            {
                link: <FormattedMessage id="footer.ordert" defaultMessage="Order a Taxi" />,
                to: "/order"
            },
            {
                link: <FormattedMessage id="footer.contactus" defaultMessage="Contact Us" />,
                to: "/contact"
            },
            {
                link: <FormattedMessage id="footer.reviews" defaultMessage="Reviews" />,
                to: "/reviews"
            }
        ]
    },
    {
        category: <FormattedMessage id="footer.information" defaultMessage="Information" />,
        links: [
            {
                link: <FormattedMessage id="footer.careers" defaultMessage="Careers" />,
                to: "/careers"
            },
            {
                link: <FormattedMessage id="footer.products" defaultMessage="Our Products" />,
                to: "/products"
            },
            {
                link: <FormattedMessage id="footer.workshop" defaultMessage="Workshop" />,
                to: "/workshop"
            },
            {
                link: <FormattedMessage id="footer.events" defaultMessage="Events" />,
                to: "/events"
            },
            {
                link: <FormattedMessage id="footer.join" defaultMessage="Join Shoferi" />,
                to: "/join"
            },
            {
                link: <FormattedMessage id="footer.assist" defaultMessage="Shoferi Assist" />,
                to: "/assist"
            }
        ]
    },
    {
        category: <FormattedMessage id="footer.help" defaultMessage="Help" />,
        links: [
            {
                link: <FormattedMessage id="footer.terms" defaultMessage="Terms & Conditions" />,
                to: "/Terms"
            },
            {
                link: <FormattedMessage id="footer.privacy" defaultMessage="Privacy Policy" />,
                to: "/Privacy"
            },
            {
                link: <FormattedMessage id="footer.cookies" defaultMessage="Cookies Policy" />,
                to: "/Cookies"
            },
            {
                link: <FormattedMessage id="footer.customer" defaultMessage="Customer Help" />,
                to: "/Customer"
            },
            {
                link: <FormattedMessage id="footer.feedbacks" defaultMessage="Feedbacks" />,
                to: "/Feedbacks"
            },
            {
                link: <FormattedMessage id="footer.partners" defaultMessage="Partners" />,
                to: "/Partners"
            }
        ]
    }
]

export default links;