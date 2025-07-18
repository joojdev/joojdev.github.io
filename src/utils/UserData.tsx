export default interface UserData {
  name: string,
  phone: string,
  email: string,
  education: [
    {
      institution: string,
      course: string,
      location: string,
      duration: string,
      text?: string
    }
  ],
  experience: [
    {
      company: string,
      position: string,
      location: string,
      duration: string,
      work: [
        {
          title: string,
          text: string
        }
      ]
    }
  ],
  prizes: [
    {
      title: string,
      text: string
    }
  ],
  languages: [
    {
      name: string,
      level: string
    }
  ],
  projects: [
    {
      title: string,
      thumbnail: string,
      description: string,
      url: string
    }
  ]
};