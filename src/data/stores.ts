export type StoreHours = {
  day: string
  hours: string
}

export type Store = {
  id: string
  name: string
  city: string
  state: string
  address: string
  hours: StoreHours[]
  type: 'Store'
  mapsUrl: string
  mapsEmbed: string
}

const address = '1C, Anuppanadi Rd, West Anuppanadi, Anuppanadi, Madurai, Tamil Nadu 625009'

export const stores: Store[] = [
  {
    id: 'madurai',
    name: 'AIRBRACE',
    city: 'Madurai',
    state: 'Tamil Nadu',
    address,
    hours: [
      { day: 'Monday', hours: '10 am–6:30 pm' },
      { day: 'Tuesday', hours: '10 am–6:30 pm' },
      { day: 'Wednesday', hours: '10 am–6:30 pm' },
      { day: 'Thursday', hours: '12 am–6:30 pm' },
      { day: 'Friday', hours: '10 am–6:30 pm' },
      { day: 'Saturday', hours: '10 am–6:30 pm' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    type: 'Store',
    mapsUrl:
      'https://www.google.com/maps/place/Airbrace/data=!4m2!3m1!1s0x0:0x897c62b318808878',
    mapsEmbed: 'https://www.google.com/maps?cid=9906901801657993336&output=embed',
  },
]
