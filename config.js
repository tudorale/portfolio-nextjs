export let configs = {
    service: "service_t905imd",
    template: "template_7v6j319",
    userId: "user_eBPDRrNR92trQmc95skaP",
    ga: "G-04BQ3SRXCE",
}

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://tudoralexandru.vercel.app';