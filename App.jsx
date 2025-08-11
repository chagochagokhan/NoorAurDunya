import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <div>
            <h1 className="text-xl font-extrabold">NoorAurDunya</h1>
            <p className="text-sm text-slate-500">قرآن، حدیث، ڈرامے اور اسلامی علم — سب کے لیے</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <a className="text-sky-600 font-semibold" href="/">ہوم</a>
          <a className="text-slate-700 hover:text-sky-600" href="/quran">قرآن</a>
          <a className="text-slate-700 hover:text-sky-600" href="/hadith">احادیث</a>
          <a className="text-slate-700 hover:text-sky-600" href="/drama">ڈرامے</a>
          <a className="text-slate-700 hover:text-sky-600" href="/stories">کہانیاں</a>
          <a className="px-4 py-2 bg-sky-600 text-white rounded-lg" href="/explore">Explore</a>
        </nav>

        <button className="md:hidden p-2">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-slate-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">نیا مضمون</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
            روشنیِ دین، علمِ دنیا<br/>
            <span className="text-sky-600">نظریہ، عمل اور سبق</span>
          </h2>
          <p className="mt-4 text-slate-600">
            NoorAurDunya میں ہم آسان اردو زبان میں قرآن، احادیث، اخلاقی کہانیاں اور فیملی فرینڈلی ڈرامے پیش کرتے ہیں — ہر عمر کے لیے۔
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#start" className="px-5 py-3 bg-emerald-500 text-white rounded-lg font-semibold shadow">ابھی دیکھیں</a>
            <a href="#about" className="px-5 py-3 border border-slate-200 rounded-lg text-slate-700">مزید جانیں</a>
          </div>

          <div className="mt-6 flex gap-2 items-center text-sm text-slate-500">
            <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>
            <div>قابلِ اعتماد مواد — ماہرین اور علماء کی نگرانی</div>
          </div>
        </div>

        <div className="rounded-2xl bg-white shadow-lg p-4">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://via.placeholder.com/800x450?text=NoorAurDunya+Hero" alt="NoorAurDunya" className="w-full h-56 object-cover"/>
            <div className="absolute left-4 bottom-4 bg-white/80 backdrop-blur px-4 py-2 rounded-lg">
              <h3 className="font-semibold">قرآن کورس برائے شروعات</h3>
              <p className="text-xs text-slate-600">آسان ترجمہ اور آڈیو دروس</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-3 border rounded-lg text-sm">
              <strong>قرآن</strong>
              <div className="text-xs text-slate-500">تفہیم اور دروس</div>
            </div>
            <div className="p-3 border rounded-lg text-sm">
              <strong>احادیث</strong>
              <div className="text-xs text-slate-500">موضوع وار</div>
            </div>
            <div className="p-3 border rounded-lg text-sm">
              <strong>کہانیاں</strong>
              <div className="text-xs text-slate-500">اخلاقی سبق</div>
            </div>
            <div className="p-3 border rounded-lg text-sm">
              <strong>سرگرمیاں</strong>
              <div className="text-xs text-slate-500">کلرنگ، quizzes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        <section id="quran" className="grid md:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg">قرآن و تفاسیر</h4>
            <p className="mt-2 text-slate-600 text-sm">آسان ترجمہ، سبق آموز ویڈیوز اور آڈیو دروس</p>
            <a className="mt-4 inline-block text-emerald-600 font-semibold" href="/quran">مزید دیکھیں →</a>
          </article>

          <article className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg">احادیث و اقوال</h4>
            <p className="mt-2 text-slate-600 text-sm">موضوع وار احادیث اور عملی رہنمائی</p>
            <a className="mt-4 inline-block text-emerald-600 font-semibold" href="/hadith">مزید دیکھیں →</a>
          </article>

          <article className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg">اسلامی ڈرامے</h4>
            <p className="mt-2 text-slate-600 text-sm">خاندانی سیریز اور اقساط</p>
            <a className="mt-4 inline-block text-emerald-600 font-semibold" href="/drama">مزید دیکھیں →</a>
          </article>
        </section>

        <section id="stories" className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">اخلاقی کہانیاں</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h5 className="font-semibold">سچائی کا انعام</h5>
              <p className="text-sm text-slate-500 mt-2">مختصر کہانی بچوں کے لیے</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h5 className="font-semibold">امانت داری</h5>
              <p className="text-sm text-slate-500 mt-2">نوجوانوں کے لیے سبق</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h5 className="font-semibold">ایمانداری</h5>
              <p className="text-sm text-slate-500 mt-2">بالغ عوام کے لیے آرٹیکل</p>
            </div>
          </div>
        </section>

        <section id="activities" className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-xl">
            <h4 className="font-bold">سرگرمیاں</h4>
            <p className="mt-2 text-slate-600">کلرنگ پیجز، quizzes اور interactive گیمز</p>
            <a className="mt-4 inline-block text-amber-600 font-semibold" href="/activities">خواب دیکھیں →</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold">والدین و نوجوان</h4>
            <p className="mt-2 text-slate-600">گھریلو تربیت اور نوجوانوں کے مسائل پر اسلامی رہنمائی</p>
            <a className="mt-4 inline-block text-emerald-600 font-semibold" href="/parents">مزید →</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-slate-50 border-t py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="font-bold">NoorAurDunya</h4>
            <p className="text-sm text-slate-600 mt-2">© {new Date().getFullYear()} — تمام حقوق محفوظ</p>
          </div>

          <div className="space-y-2 text-sm text-slate-600">
            <div>رابطہ: info@nooraurdunya.example</div>
            <div className="flex gap-3 mt-2">
              <a className="text-sky-600">فیس بک</a>
              <a className="text-sky-600">انستا</a>
              <a className="text-sky-600">یوٹیوب</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
