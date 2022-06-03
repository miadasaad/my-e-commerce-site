import cat1 from "../components/images/cat1.jpg";
import cat11 from "../components/images/cat11.PNG";
import cat2 from "../components/images/cat2.jpg";
import cat22 from "../components/images/cat22.jpg";
import cat3 from "../components/images/cat3.PNG";
import cat33 from "../components/images/cat33.jpg";
import cat4 from "../components/images/cat4.PNG";
import cat44 from "../components/images/cat44.jpg";
import cat5 from "../components/images/cat5.PNG";
import cat55 from "../components/images/cat55.jpg";
import cat6 from "../components/images/cat6.PNG";
import cat66 from "../components/images/cat66.jpg";
import cat7 from "../components/images/cat1.jpg";
import cat77 from "../components/images/cat77.jpg";
import cat8 from "../components/images/cat8.jpg";
import cat88 from "../components/images/cat88.jpg";
import cat9 from "../components/images/cat9.jpg";
import cat99 from "../components/images/cat99.jpg";
import best1 from '../components/images/best1.jpg'
import best11 from '../components/images/best11.jpg'
import best2 from '../components/images/best2.jpg'
import best22 from '../components/images/best22.jpg'
import best3 from '../components/images/best3.jpg'
import best33 from '../components/images/best33.jpg'
import best4 from '../components/images/best4.jpg'
import best44 from '../components/images/best44.jpg'
import best5 from '../components/images/best5.jpg'
import best55 from '../components/images/best55.jpg'

let users = [
    {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    },
    {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    },
    {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    }
]
let products = [
    {
        id: 0,
        name: 'Rugged camera',
        price: '41.00',
        count: 1,
        rate: false,
        timer: false,
        deal: true,
        daily: false,
        featured: true,
        images: [
            {
                url: cat99
            },
            {
                url: cat9
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 1,
        name: 'DSLR camera',
        price: '41.00',
        count: 1,
        rate: true,
        timer: false,
        discount: '15%',
        featured: true,
        images: [
            {
                url: cat11
            },
            {
                url: cat1
            },
            {
                url: best11
            },
            {
                url: best1
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]

    },
    {
        id: 2,
        name: 'Mirrorless camera',
        price: '51.00',
        count: 1,
        rate: false,
        discount: false,
        deal: false,
        daily: true,
        featured: true,
        images: [
            {
                url: cat22
            },
            {
                url: cat2
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 3,
        name: 'Point&shot camera',
        price: '32.00',
        count: 1,
        rate: true,
        discount: '20%',
        deal: true,
        daily: false,
        featured: true,
        images: [
            {
                url: cat33
            },
            {
                url: cat3
            },
            {
                url: best22
            },
            {
                url: best2
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 4,
        name: 'Smart phone camera',
        price: '26.00',
        count: 1,
        rate: true,
        deal: true,
        daily: true,
        images: [
            {
                url: cat44
            },
            {
                url: cat4
            },
            {
                url: best33
            },
            {
                url: best3
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 5,
        name: 'Bridge camera',
        price: '17.00',
        count: 1,
        rate: '',
        discount: '20%',
        deal: false,
        daily: false,
        images: [
            {
                url: cat55
            },
            {
                url: cat5
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 6,
        name: 'Medium format camera',
        price: '33.00',
        count: 1,
        rate: true,
        deal: false,
        daily: true,
        images: [
            {
                url: cat66
            },
            {
                url: cat6
            },
            {
                url: best44
            },
            {
                url: best4
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 7,
        name: 'Film camera',
        price: '27.00',
        count: 1,
        rate: '',
        deal: false,
        daily: true,
        images: [
            {
                url: cat77
            },
            {
                url: cat7
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 8,
        name: 'Polaroid camera',
        price: '65.00',
        count: 1,
        rate: true,
        deal: false,
        daily: false,
        images: [
            {
                url: cat88
            },
            {
                url: cat8
            },
            {
                url: best55
            },
            {
                url: best5
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 9,
        name: 'Digital cine camera',
        price: '53.00',
        count: 1,
        discount: '20%',
        rate: '',
        deal: false,
        daily: true,
        images: [
            {
                url: cat44
            },
            {
                url: cat4
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 10,
        name: 'Action camera',
        price: '32.00',
        count: 1,
        rate: true,
        deal: false,
        daily: true,
        images: [
            {
                url: cat66
            },
            {
                url: cat6
            }, {
                url: best11
            },
            {
                url: best1
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },
    {
        id: 11,
        name: '360 degree camera',
        price: '24.00',
        count: 1,
        rate: '',
        deal: false,
        daily: true,
        images: [
            {
                url: cat11
            },
            {
                url: cat1
            }
        ],
        description: "A DSLR camera is the short form of Digital Single Lens Reflex Camera. It is the most popular types of cameras in the market. All professional photographers will have one DSLR camera in their kit. It is actually a combination of a digital imaging sensor with a single lens reflex camera.",
        advantages: [
            "Plush pillows and breathable bed linens",
            "Soft, oversized bath towels",
            "Full-sized, pH-balanced toiletries",
            "Complimentary refreshments",
            "Adequate safety/security",
            "Internet",
            "Comfortable beds"
        ]
    },

]
let cart = {}


// get products
export function _getProducts() {
    return new Promise((res, rej) => {
        setTimeout(() => res(products), 1000)
    })
}

// get users
export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res(users), 1000)
    })
}

export function _saveProduct(product) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            cart = {
                ...cart,
                product
            }
            res({ ...cart })
        }, 1000)
    })

}

export function _saveUser(user) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                user
            }
            res(user)
        }, 1000)
    })

}

/**
 * let arr = []
    for (const key in users) {
        arr.push(users[key])
    }
    console.log(arr)
    return {
        users: arr
    }
 */