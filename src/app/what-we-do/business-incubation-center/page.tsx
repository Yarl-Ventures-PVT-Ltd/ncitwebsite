import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MonitorPlay, Wifi, Users, Presentation, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Incubation Center | NCIT',
  description: 'NCIT Business Incubation Center powered by IE-NESL.',
};

const facilities = [
  { icon: <Presentation className="w-5 h-5" />, text: "Training Hall (40 seats) + Projector + Sound System" },
  { icon: <Users className="w-5 h-5" />, text: "Co-Working Space (20 seats with 5 Round Tables)" },
  { icon: <MonitorPlay className="w-5 h-5" />, text: "Conference Hall (11 seats + Conference Table)" },
  { icon: <Building2 className="w-5 h-5" />, text: "Fully Air Conditioned" },
  { icon: <Wifi className="w-5 h-5" />, text: "WiFi Internet Facility (Limited)" },
  { icon: <Car className="w-5 h-5" />, text: "Private Parking at Ground" },
];

const gallery = [
  "https://www.ncit.lk/wp-content/uploads/2018/06/IMG-20180406-WA0017-180x300.jpg",
  "https://www.ncit.lk/wp-content/uploads/2018/06/IMG-20180427-WA0013-180x300.jpg",
  "https://www.ncit.lk/wp-content/uploads/2018/06/IMG-20180531-WA0004-300x225.jpg",
  "https://www.ncit.lk/wp-content/uploads/2018/06/IMG-20180531-WA0005-300x225.jpg",
  "https://www.ncit.lk/wp-content/uploads/2018/06/IMG-20180531-WA0006-300x225.jpg",
  "https://www.ncit.lk/wp-content/uploads/2018/06/IMG-20180531-WA0009-300x225.jpg",
];

export default function IncubationCenterPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ncit-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/20">
              Note: Center temporarily closed since Sept 2020
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Business Incubation Center
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Powered by IE-NESL (Innovation Ecosystem – North East Sri Lanka) and managed by NCIT, helping young entrepreneurs transform innovative ideas into viable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column (Details) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Objectives */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-ncit-ink/5">
                <h2 className="text-2xl font-bold text-ncit-ink mb-6 font-heading">Objectives</h2>
                <ul className="space-y-4 text-ncit-ink/70">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-ncit-blue shrink-0 mt-2" />
                    Help young entrepreneurs transform innovative ideas into viable businesses.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-ncit-blue shrink-0 mt-2" />
                    Provide incubation programs that nurture and help grow new businesses by offering expertise, professional guidance, and services – including access to space, business planning, education and training, and legal advice.
                  </li>
                </ul>
              </div>

              {/* Facilities */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-ncit-ink/5">
                <h2 className="text-2xl font-bold text-ncit-ink mb-6 font-heading">Center Facilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="text-ncit-blue shrink-0">{facility.icon}</div>
                      <span className="text-sm font-medium text-ncit-ink/80">{facility.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tamil Summary */}
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 shadow-xl shadow-blue-900/5">
                <h2 className="text-xl font-bold text-ncit-ink mb-4 font-heading">சுருக்கம் (Summary in Tamil)</h2>
                <p className="text-ncit-ink/70 text-sm leading-relaxed mb-4">
                  வடக்கு தகவல் தொழில்நுட்ப சம்மேளனத்தின் NCIT வணிக வளர்ச்சி மையத்தை (Business Incubation Center) அனைவரும் பயன்படுத்தி அதன் பயனை பெறுமாறு வேண்டுகின்றோம்.
                </p>
                <p className="text-ncit-ink/70 text-sm leading-relaxed">
                  இந்த நிலையமானது கனடாவின் IENESL அமைப்பின் நிதி அனுசரணையில் வடக்கு தகவல் தொழில் நுட்ப சம்மேளத்தினால் (NCIT) நிறுவப்பட்டு இணைந்த செயற்திட்டமாக செயற்படுத்தப்படுகின்றது.
                </p>
              </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg shadow-ncit-ink/5 bg-ncit-ink text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 font-heading text-white">Project Summary</h3>
                  <ul className="space-y-4 text-sm text-white/70">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span className="font-semibold text-white/90">Managed By:</span> NCIT
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span className="font-semibold text-white/90">Funded By:</span> IE-NESL
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span className="font-semibold text-white/90">Size:</span> 2000 Sq Ft
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span className="font-semibold text-white/90">Opened:</span> June 26, 2018
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Location</h3>
                    <p className="text-sm text-white/70">
                      121/1 Power House Road<br />
                      Jaffna Town<br />
                      (Behind Bus Stand)
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Contact</h3>
                    <p className="text-sm text-white/70">
                      +94 21 222 9600<br />
                      support@ncit.lk
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 font-heading text-ncit-ink">Gallery</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {gallery.map((src, idx) => (
                      <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={src} 
                          alt="Incubation Center" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
