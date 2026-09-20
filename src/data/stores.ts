export type Store = {
  id: string
  name: string
  city: string
  state: string
  address: string
  phone: string
  hours: string
  type: 'Flagship' | 'Dealer' | 'Retail Partner'
}

export const stores: Store[] = [
  {
    id: 'madurai-hq',
    name: 'AIRBRACE Experience Desk',
    city: 'Madurai',
    state: 'Tamil Nadu',
    address: 'Manufacturing campus, Madurai',
    phone: '+91 63857 71997',
    hours: 'Mon–Sat, 10:00–18:30',
    type: 'Flagship',
  },
  {
    id: 'chennai',
    name: 'Chennai Auto Lifestyle',
    city: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Anna Nagar, Chennai',
    phone: '+91 63857 71997',
    hours: 'Mon–Sat, 10:00–20:00',
    type: 'Dealer',
  },
  {
    id: 'coimbatore',
    name: 'Kovai Car Comfort',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    address: 'Avinashi Road, Coimbatore',
    phone: '+91 63857 71997',
    hours: 'Mon–Sat, 10:00–20:00',
    type: 'Dealer',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru Mobility Hub',
    city: 'Bengaluru',
    state: 'Karnataka',
    address: 'Indiranagar, Bengaluru',
    phone: '+91 63857 71997',
    hours: 'Mon–Sun, 11:00–20:00',
    type: 'Retail Partner',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad Drive Studio',
    city: 'Hyderabad',
    state: 'Telangana',
    address: 'Banjara Hills, Hyderabad',
    phone: '+91 63857 71997',
    hours: 'Mon–Sat, 10:30–20:00',
    type: 'Dealer',
  },
  {
    id: 'mumbai',
    name: 'Mumbai Accessory Atelier',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Andheri West, Mumbai',
    phone: '+91 63857 71997',
    hours: 'Mon–Sun, 11:00–21:00',
    type: 'Retail Partner',
  },
  {
    id: 'pune',
    name: 'Pune Road Trip Store',
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Koregaon Park, Pune',
    phone: '+91 63857 71997',
    hours: 'Mon–Sat, 10:00–20:00',
    type: 'Dealer',
  },
  {
    id: 'delhi',
    name: 'Delhi NCR Comfort Point',
    city: 'New Delhi',
    state: 'Delhi',
    address: 'South Extension, New Delhi',
    phone: '+91 63857 71997',
    hours: 'Mon–Sun, 11:00–21:00',
    type: 'Retail Partner',
  },
]

export const cities = ['All', ...Array.from(new Set(stores.map((store) => store.city)))]
