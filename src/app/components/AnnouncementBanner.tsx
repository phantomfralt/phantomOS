import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';
import { T } from '../utils/textEncoder';

interface AnnouncementBannerProps {
  message: string;
  onClose: () => void;
}

export function AnnouncementBanner({ message, onClose }: AnnouncementBannerProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="flex items-center gap-2 font-bold text-lg">
                <T>cfqzmlx</T>
                <CheckCircle className="w-5 h-5 text-blue-300 fill-blue-300" />
              </div>
              <div className="w-px h-6 bg-white/30" />
              <p className="flex-1">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close announcement"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
