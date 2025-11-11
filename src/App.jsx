import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, GraduationCap, Award, Users, Building2, BookOpen, ChevronRight, PlayCircle, Star, ShieldCheck, Newspaper, Calendar, Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube, Linkedin, Download, MessageSquare } from 'lucide-react'
import Spline from '@splinetool/react-spline'

// Color tokens
const colors = {
  navy: '#0B1B3B',
  gold: '#E0B100',
  white: '#FFFFFF',
  light: '#F8FAFC',
}

const navLinks = [
  { label: 'Tentang Prodi', href: '#tentang' },
  { label: 'Program Akademik', href: '#program' },
  { label: 'Dosen & Staf', href: '#dosen' },
  { label: 'Riset', href: '#riset' },
  { label: 'Mahasiswa', href: '#mahasiswa' },
  { label: 'Alumni', href: '#alumni' },
  { label: 'Berita & Event', href: '#berita' },
  { label: 'Pendaftaran', href: '#pendaftaran' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('navbar')
      if (!nav) return
      if (window.scrollY > 10) nav.classList.add('backdrop-blur-md', 'bg-white/70', 'shadow-sm')
      else nav.classList.remove('backdrop-blur-md', 'bg-white/70', 'shadow-sm')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="navbar" className="fixed inset-x-0 top-0 z-50 transition-all">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-[var(--gold)] grid place-items-center text-white font-bold">AK</div>
          <div>
            <p className="text-sm text-gray-500 leading-none">Fakultas Ekonomi</p>
            <h1 className="text-base sm:text-lg font-semibold text-[var(--navy)]">Program Studi Akuntansi</h1>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-[var(--navy)]/80 hover:text-[var(--navy)] transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#pendaftaran" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-semibold px-4 py-2 rounded-md hover:brightness-95 transition">
            Daftar Sekarang
          </a>
        </div>

        <button aria-label="Open Menu" className="lg:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6 text-[var(--navy)]" />
        </button>

        {open && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
        )}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-6 z-50 transition-transform lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-[var(--gold)] grid place-items-center text-white font-bold">AK</div>
              <div>
                <p className="text-xs text-gray-500 leading-none">Fakultas Ekonomi</p>
                <p className="text-sm font-semibold text-[var(--navy)] leading-none">Prodi Akuntansi</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <X className="h-6 w-6 text-[var(--navy)]" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navLinks.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-[var(--navy)]/80 hover:text-[var(--navy)]">
                {n.label}
              </a>
            ))}
            <a href="#pendaftaran" onClick={() => setOpen(false)} className="inline-flex items-center justify-center w-full gap-2 bg-[var(--gold)] text-[var(--navy)] font-semibold px-4 py-2 rounded-md">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--navy)] leading-tight">
            Wujudkan Karir Gemilang sebagai Akuntan Profesional
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-[var(--navy)]/80">
            Program Studi Akuntansi UVBN menghasilkan lulusan kompeten dengan kurikulum berbasis industri dan dosen bersertifikasi profesional.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pendaftaran" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-semibold px-6 py-3 rounded-md hover:brightness-95 transition">
              Daftar Sekarang <ChevronRight className="h-5 w-5" />
            </a>
            <a href="#program" className="inline-flex items-center gap-2 border border-[var(--navy)]/20 text-[var(--navy)] font-semibold px-6 py-3 rounded-md hover:bg-[var(--navy)] hover:text-white transition">
              Lihat Program Kami
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-[var(--navy)]/70">
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-[var(--gold)]" /><span>Akreditasi Unggul</span></div>
            <div className="flex items-center gap-2"><Star className="h-5 w-5 text-[var(--gold)]" /><span>Alumni Sukses</span></div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 border border-white/60">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-black/5 grid place-items-center">
            <button className="inline-flex items-center gap-2 text-[var(--navy)] font-semibold">
              <PlayCircle className="h-10 w-10 text-[var(--gold)]" /> Video Profil Prodi
            </button>
          </div>
          <p className="text-sm text-[var(--navy)]/70 mt-3">Tonton pengalaman belajar dan suasana kampus UVBN.</p>
        </motion.div>
      </div>
    </section>
  )
}

function WhySection() {
  const items = [
    { icon: <GraduationCap className="h-6 w-6" />, title: 'Kurikulum Berbasis Industri', desc: 'Disusun bersama praktisi dan asosiasi profesi.' },
    { icon: <Award className="h-6 w-6" />, title: 'Akreditasi Unggul', desc: 'Mutu pendidikan terjamin dan diakui nasional.' },
    { icon: <Users className="h-6 w-6" />, title: 'Jaringan Alumni Kuat', desc: 'Terhubung dengan industri keuangan dan audit.' },
    { icon: <Building2 className="h-6 w-6" />, title: 'Kemitraan Industri', desc: 'Akses magang dan proyek nyata di perusahaan.' },
  ]
  return (
    <section id="tentang" className="py-20 bg-[var(--light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--navy)]">Mengapa Memilih Akuntansi UVBN</h3>
            <p className="mt-4 text-[var(--navy)]/80">Kami berkomitmen menghasilkan lulusan berintegritas, kompeten, dan adaptif terhadap perkembangan teknologi serta kebutuhan industri.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {items.map((it) => (
                <div key={it.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">
                  <div className="h-10 w-10 rounded-lg bg-[var(--gold)]/15 text-[var(--gold)] grid place-items-center mb-3">
                    {it.icon}
                  </div>
                  <h4 className="font-semibold text-[var(--navy)]">{it.title}</h4>
                  <p className="text-sm text-[var(--navy)]/70 mt-1">{it.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-white">
              <img src="https://images.unsplash.com/photo-1543295523-78c9bbdba65c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWhhc2lzd2ElMjBBa3VudGFuc2klMjBVVkJOfGVufDB8MHx8fDE3NjI4NTIxMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Mahasiswa Akuntansi UVBN" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { label: 'Mahasiswa Aktif', value: '1.200+' },
    { label: 'Akreditasi', value: 'Unggul (A)' },
    { label: 'Alumni Sukses', value: '5.000+' },
    { label: 'Mitra Industri', value: '120+' },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 rounded-xl bg-[var(--light)] border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-[var(--navy)]">{s.value}</div>
            <div className="mt-1 text-[var(--navy)]/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProgramSlider() {
  const programs = [
    { title: 'Akuntansi Keuangan', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop', desc: 'Mendalami standar pelaporan dan analisis keuangan.' },
    { title: 'Audit & Assurance', img: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop', desc: 'Menyiapkan auditor berintegritas dan profesional.' },
    { title: 'Perpajakan', img: 'https://images.unsplash.com/photo-1554224155-c4e8cb5b2b1f?q=80&w=1600&auto=format&fit=crop', desc: 'Strategi kepatuhan dan perencanaan pajak yang efektif.' },
    { title: 'Sistem Informasi Akuntansi', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop', desc: 'Integrasi akuntansi dengan teknologi informasi.' },
  ]

  return (
    <section id="program" className="py-20 bg-[var(--light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--navy)]">Program Akademik</h3>
          <a href="#pendaftaran" className="hidden sm:inline-flex items-center gap-2 text-[var(--navy)] hover:text-[var(--gold)] font-semibold">Lihat Semua <ChevronRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -6 }} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[var(--navy)]">{p.title}</h4>
                <p className="text-sm text-[var(--navy)]/70 mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Nadia, Alumni 2020', role: 'Auditor di Big Four', text: 'Bekal kompetensi dan jaringan alumni dari UVBN sangat membantu karier saya.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { name: 'Raka, Mahasiswa', role: 'Ketua Himpunan', text: 'Kegiatan kemahasiswaan aktif dan kolaboratif, dosen-dosen suportif.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--navy)] text-center">Testimoni</h3>
        <p className="text-[var(--navy)]/70 text-center mt-2">Cerita singkat dari mahasiswa dan alumni Akuntansi UVBN</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="aspect-video bg-black/5">
                <iframe className="w-full h-full" src={t.video} title={t.name} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="p-5">
                <div className="font-semibold text-[var(--navy)]">{t.name}</div>
                <div className="text-sm text-[var(--navy)]/60">{t.role}</div>
                <p className="mt-2 text-[var(--navy)]/80">“{t.text}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsEvents() {
  const posts = [
    { title: 'Kuliah Umum Forensik Akuntansi', date: '12 Okt 2025', img: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Kerjasama Magang dengan Bank Nasional', date: '8 Okt 2025', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Prestasi: Juara 1 Lomba KAP Nasional', date: '2 Okt 2025', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop' },
  ]
  return (
    <section id="berita" className="py-20 bg-[var(--light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--navy)]">Berita & Event</h3>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-[var(--navy)] hover:text-[var(--gold)] font-semibold">Lihat Semua <ChevronRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <time className="text-xs text-[var(--navy)]/60">{p.date}</time>
                <h4 className="mt-1 font-semibold text-[var(--navy)]">{p.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Partners() {
  const partners = [
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bank_Mandiri_logo_2016.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/04/Bank_BRI_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/Logo_OJK.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_BPK_RI.svg',
  ]
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center opacity-70">
          {partners.map((src, i) => (
            <img key={i} src={src} alt={`Mitra ${i+1}`} className="h-10 object-contain mx-auto" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[var(--gold)] grid place-items-center text-[var(--navy)] font-bold">AK</div>
            <div>
              <p className="text-xs/4 text-white/70">Fakultas Ekonomi</p>
              <p className="font-semibold">Program Studi Akuntansi</p>
            </div>
          </div>
          <p className="text-white/70 mt-4">Universitas Veteran Bangun Nusantara<br/>Lokasi: [sesuaikan dengan lokasi kampus]</p>
          <div className="flex gap-3 mt-4 opacity-80">
            <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5"/></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
            <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5"/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Sitemap</h5>
          <ul className="space-y-2 text-white/80">
            {navLinks.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-[var(--gold)]">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Kontak</h5>
          <ul className="space-y-2 text-white/80">
            <li className="flex gap-2"><Phone className="h-5 w-5"/> (0271) 123456</li>
            <li className="flex gap-2"><Mail className="h-5 w-5"/> akuntansi@uvbn.ac.id</li>
            <li className="flex gap-2"><MapPin className="h-5 w-5"/> [Alamat kampus]</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Newsletter</h5>
          <NewsletterForm />
          <a href="#" className="mt-4 inline-flex items-center gap-2 text-white/80 hover:text-white"><Download className="h-4 w-4"/> Download Brosur</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white/70 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Prodi Akuntansi UVBN. All rights reserved.</p>
          <p>Dikelola oleh Fakultas Ekonomi UVBN</p>
        </div>
      </div>
    </footer>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    // Placeholder submission, can be connected to backend later
    setSubmitted(true)
  }

  return (
    <form onSubmit={onSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
      <input type="email" required placeholder="Email Anda" value={email} onChange={(e)=>setEmail(e.target.value)} className="flex-1 bg-transparent placeholder:text-white/60 text-white focus:outline-none px-3 py-2" />
      <button type="submit" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-semibold px-3 py-2 rounded-md">
        <Send className="h-4 w-4"/> Kirim
      </button>
      {submitted && <span className="sr-only">Terkirim</span>}
    </form>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      // Example: send to backend if available
      const baseUrl = import.meta.env.VITE_BACKEND_URL
      if (baseUrl) {
        await fetch(`${baseUrl}/api/hello`, { method: 'GET' })
      }
      setStatus('Pesan berhasil dikirim. Kami akan menghubungi Anda.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Terjadi kesalahan. Silakan coba lagi.')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[var(--navy)]/80 mb-1">Nama Lengkap</label>
          <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} required className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]" placeholder="Nama Anda" />
        </div>
        <div>
          <label className="block text-sm text-[var(--navy)]/80 mb-1">Email</label>
          <input type="email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} required className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]" placeholder="email@domain.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-[var(--navy)]/80 mb-1">Pesan</label>
        <textarea value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} rows="4" required className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]" placeholder="Tulis pertanyaan atau kebutuhan Anda"></textarea>
      </div>
      <button className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-semibold px-5 py-2 rounded-md">
        <Send className="h-4 w-4"/> Kirim Pesan
      </button>
      {status && <p className="text-sm text-green-700 mt-2">{status}</p>}
    </form>
  )
}

function CTASection() {
  return (
    <section id="pendaftaran" className="py-20 bg-gradient-to-br from-white to-[var(--light)]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--navy)]">Siap Bergabung dengan Akuntansi UVBN?</h3>
          <p className="mt-4 text-[var(--navy)]/80">Dapatkan informasi pendaftaran, persyaratan, dan jadwal seleksi terbaru. Tim kami siap membantu setiap tahap proses.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-semibold px-5 py-2 rounded-md">Daftar Sekarang</a>
            <a href="#program" className="inline-flex items-center gap-2 border border-[var(--navy)]/20 text-[var(--navy)] font-semibold px-5 py-2 rounded-md">Pelajari Program</a>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h4 className="text-xl font-semibold text-[var(--navy)] mb-4">Hubungi Kami</h4>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function SEOHead() {
  useEffect(() => {
    document.title = 'Program Studi Akuntansi Terakreditasi | Universitas Veteran Bangun Nusantara'

    const metaDesc = 'Program Studi Akuntansi UVBN terakreditasi dengan kurikulum modern, dosen berpengalaman & bersertifikat akuntan profesional. Daftar sekarang!'

    const metas = [
      { name: 'description', content: metaDesc },
      { property: 'og:title', content: 'Program Studi Akuntansi Terakreditasi | Universitas Veteran Bangun Nusantara' },
      { property: 'og:description', content: metaDesc },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { itemprop: 'name', content: 'Program Studi Akuntansi UVBN' },
      { itemprop: 'description', content: metaDesc },
    ]

    metas.forEach((m) => {
      const el = document.querySelector(`meta[${m.name ? 'name' : 'property'}='${m.name || m.property}']`) || document.createElement('meta')
      if (m.name) el.setAttribute('name', m.name)
      if (m.property) el.setAttribute('property', m.property)
      if (m.itemprop) el.setAttribute('itemprop', m.itemprop)
      el.setAttribute('content', m.content)
      document.head.appendChild(el)
    })

    // Structured data
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Program Studi Akuntansi - Universitas Veteran Bangun Nusantara',
      url: window.location.href,
      department: {
        '@type': 'CollegeOrUniversity',
        name: 'Fakultas Ekonomi',
      },
      address: 'Lokasi: [sesuaikan dengan lokasi kampus]',
      sameAs: ['https://facebook.com', 'https://instagram.com', 'https://youtube.com']
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(orgSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:brightness-110">
        <MessageSquare className="h-5 w-5"/> WhatsApp
      </a>
    </div>
  )
}

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--navy', colors.navy)
    document.documentElement.style.setProperty('--gold', colors.gold)
    document.documentElement.style.setProperty('--light', colors.light)
  }, [])

  return (
    <div className="min-h-screen bg-white text-[var(--navy)]">
      <SEOHead />
      <Navbar />
      <Hero />
      <main>
        <WhySection />
        <Stats />
        <ProgramSlider />
        <Testimonials />
        <NewsEvents />
        <Partners />
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default App
