export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
          <div className="border-t border-gray-800  sm:mt-8 pt-6 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} CD Smart Campus. สงวนลิขสิทธิ์</p>
          </div>
      </footer>
    );
};