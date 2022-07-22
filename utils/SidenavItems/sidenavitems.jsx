// import { UsersIcon, HomeIcon, ChartBarIcon } from "@heroicons/react/outline"
import { PeopleAlt, Home, BarChart, EmojiPeople } from "@material-ui/icons"
export const navData = {
    menuItems: [
        {
            items: [
                { seconTitle:"Dashboard", },
                {
                    title: "home",
                    icon: <Home className="h-5 w-5" />,
                    link: "/"
                },
                {
                    title: "Analytics",
                    icon: <BarChart className="h-5 w-5" />,
                    link: "/"
                },
            ]
        },
        {
            items: [
                { seconTitle:"Menu", },
                {
                    title: "Tambah Admin",
                    icon: <PeopleAlt className="h-5 w-5" />,
                    link: "/"
                },
                {
                    title: "Tambah Karyawan",
                    icon: <PeopleAlt className="h-5 w-5" />,
                    link: "/"
                },
            ]
        },
    ]
}