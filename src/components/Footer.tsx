export default function Footer() {
  return (
    <footer className="bg-black-900 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">MGM</h3>
            <p className="text-gray-400 max-w-sm">
              MGM Integrated Services Ltd.<br />
              Premium home and AC services operating in Salem, Tamil Nadu.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123, Main Road, Salem</li>
              <li>Tamil Nadu - 636001</li>
              <li className="pt-2">
                <a href="tel:+910000000000" className="hover:text-gold-400 transition-colors">
                  +91 00000 00000
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MGM Integrated Services Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed for Salem.
          </p>
        </div>
      </div>
    </footer>
  );
}
