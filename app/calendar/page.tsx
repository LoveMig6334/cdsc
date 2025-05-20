"use client";
import { useState, useEffect } from 'react';
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { th } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, X } from 'lucide-react';
import NormalNavbar from '../components/NormalNav';
// import BackButton from '../../components/Back';

// กำหนดรูปแบบของ Event
interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  location?: string;
}

export default function Home() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  
  // ดึงข้อมูล event จาก Google Calendar API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        
        // กำหนดช่วงเวลาที่ต้องการดึงข้อมูล (เริ่มต้นและสิ้นสุดของเดือนปัจจุบัน)
        const start = startOfMonth(currentDate);
        const end = endOfMonth(currentDate);
        
        const response = await fetch(`/api/calendar?startDate=${start.toISOString()}&endDate=${end.toISOString()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        setEvents(data.events);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError("ไม่สามารถดึงข้อมูลกิจกรรมได้ โปรดลองอีกครั้งในภายหลัง");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currentDate]);

  // ฟังก์ชันเปลี่ยนเดือน
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  // สร้างรายการวันทั้งหมดในเดือนปัจจุบัน
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });

  // กรองกิจกรรมที่กำลังจะมาถึง (นับจากวันนี้เป็นต้นไป และไม่เกิน 5 รายการ)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const upcomingEvents = [...events]
    .filter(event => new Date(event.start.dateTime) >= today)
    .sort((a, b) => new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime())
    .slice(0, 5);

  // ดึงกิจกรรมของวันที่ระบุ
  const getEventsForDay = (day: Date) => {
    return events.filter(event => {
      const eventDate = parseISO(event.start.dateTime);
      return isSameDay(eventDate, day);
    });
  };

  // ฟังก์ชันเปิดรายละเอียดกิจกรรม
  const openEventDetails = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  // ฟังก์ชันปิดรายละเอียดกิจกรรม
  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  // ส่วนของกิจกรรมที่กำลังจะมาถึง
  const UpcomingEventsList = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
      <div className="bg-yellow-500 text-white p-4">
        <h2 className="text-xl font-semibold flex items-center">
          <CalendarIcon size={20} className="mr-2" />
          กิจกรรมที่กำลังจะมาถึง
        </h2>
      </div>
      
      <div className="p-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 border-4 border-blue-800 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-600">กำลังโหลดข้อมูล...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500">{error}</p>
          </div>
        ) : upcomingEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            ไม่มีกิจกรรมที่กำลังจะมาถึงในเดือนนี้
          </div>
        ) : (
          <ul className="space-y-4">
            {upcomingEvents.map(event => (
              <li 
                key={event.id} 
                className="bg-gray-100 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 cursor-pointer hover:bg-blue-50 p-2 rounded transition"
                onClick={() => openEventDetails(event)}
              >
                <h3 className="font-semibold text-blue-800">{event.summary}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  {format(parseISO(event.start.dateTime), 'EEE d MMM yyyy', { locale: th })}
                </div>
                <div className="text-sm text-gray-600">
                  {format(parseISO(event.start.dateTime), 'HH:mm')} - {format(parseISO(event.end.dateTime), 'HH:mm')}
                </div>
                {event.location && (
                  <div className="text-sm text-gray-600 mt-1">
                    📍 {event.location}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  // ส่วนของปฏิทินรายเดือน
  const MonthlyCalendar = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* ส่วนหัวปฏิทิน */}
      <div className="bg-blue-900 text-white p-4 flex items-center justify-between">
        <button 
          onClick={prevMonth} 
          className="p-2 rounded-full hover:bg-blue-800 transition"
        >
          <ChevronLeft size={20} />
        </button>
        
        <h2 className="text-xl font-semibold">
          {format(currentDate, 'MMMM yyyy', { locale: th })}
        </h2>
        
        <button 
          onClick={nextMonth} 
          className="p-2 rounded-full hover:bg-blue-800 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* วันในสัปดาห์ */}
      <div className="grid grid-cols-7 bg-blue-50">
        {['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'].map(day => (
          <div key={day} className="text-center py-2 font-semibold text-blue-800">
            {day}
          </div>
        ))}
      </div>
      
      {/* วันในเดือน */}
      <div className="grid grid-cols-7">
        {/* วันว่างก่อนวันแรกของเดือน */}
        {Array.from({ length: days[0].getDay() }).map((_, index) => (
          <div key={`empty-${index}`} className="h-24 border border-gray-100 bg-gray-50"></div>
        ))}
        
        {/* วันในเดือน */}
        {days.map(day => {
          const dayEvents = getEventsForDay(day);
          const isToday = isSameDay(day, today);
          
          return (
            <div 
              key={day.toString()} 
              className={`h-24 border border-gray-100 p-1 overflow-hidden ${
                isToday ? 'bg-yellow-50 border-yellow-400' : ''
              }`}
            >
              <div className={`text-right mb-1 ${isToday ? 'text-yellow-600 font-bold' : 'text-gray-700'}`}>
                {format(day, 'd')}
              </div>
              
              <div className="overflow-y-auto h-16">
                {dayEvents.map(event => (
                  <div 
                    key={event.id} 
                    className="text-xs p-1 mb-1 rounded bg-blue-100 text-blue-800 truncate cursor-pointer hover:bg-blue-200 transition"
                    title={event.summary}
                    onClick={() => openEventDetails(event)}
                  >
                    {event.summary}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
    <NormalNavbar />
    {/* <BackButton  */}
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-6xl mx-auto py-24 px-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">ปฏิทินกิจกรรม</h1>
        
        {/* แก้ไขตรงนี้: ใช้ flex-col และ flex-col-reverse ในการเรียงลำดับบนอุปกรณ์ต่างๆ */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* แสดงกิจกรรมที่กำลังจะมาถึงอยู่ด้านบนเมื่อใช้บนมือถือ */}
          <div className="lg:hidden w-full mb-6">
            <UpcomingEventsList />
          </div>
          
          {/* ปฏิทินแสดงกิจกรรมรายเดือน */}
          <div className="w-full lg:w-2/3">
            <MonthlyCalendar />
          </div>
          
          {/* กิจกรรมที่กำลังจะมาถึง (แสดงเฉพาะบนหน้าจอใหญ่) */}
          <div className="hidden lg:block lg:w-1/3">
            <UpcomingEventsList />
          </div>
        </div>
      </div>

      {/* Modal แสดงรายละเอียดกิจกรรมด้วย backdrop blur */}
      {selectedEvent && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="bg-blue-800 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold text-lg truncate">{selectedEvent.summary}</h3>
              <button 
                onClick={closeEventDetails}
                className="text-white hover:bg-blue-700 rounded-full p-1"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <CalendarIcon size={16} className="text-blue-600 mr-2" />
                  <div>
                    <div>{format(parseISO(selectedEvent.start.dateTime), 'EEEE d MMMM yyyy', { locale: th })}</div>
                    <div className="text-gray-600">
                      {format(parseISO(selectedEvent.start.dateTime), 'HH:mm')} - {format(parseISO(selectedEvent.end.dateTime), 'HH:mm')}
                    </div>
                  </div>
                </div>
                
                {selectedEvent.location && (
                  <div className="flex items-start mb-2">
                    <span className="text-blue-600 mr-2">📍</span>
                    <div className="text-gray-700">{selectedEvent.location}</div>
                  </div>
                )}
              </div>
              
              {selectedEvent.description && (
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium mb-2 text-blue-800">รายละเอียด</h4>
                  <div className="text-gray-700 whitespace-pre-line">
                    {selectedEvent.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}