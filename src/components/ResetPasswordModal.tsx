import React, { useState } from 'react';
import { X, Mail, Key, Loader2 } from 'lucide-react';
import { sendPasswordReset } from '../firebase';

interface ResetPasswordModalProps {
  user: any;
  onClose: () => void;
  onReset: (method: 'email' | 'direct') => Promise<void>;
}

export default function ResetPasswordModal({ user, onClose, onReset }: ResetPasswordModalProps) {
  const [loading, setLoading] = useState(false);

  const handleReset = async (method: 'email' | 'direct') => {
    setLoading(true);
    await onReset(method);
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-stone-900">Khôi phục mật khẩu cho {user.displayName}</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600"><X className="w-5 h-5" /></button>
        </div>
        <p className="text-sm text-stone-500">Chọn cách thức khôi phục mật khẩu:</p>
        <div className="space-y-2">
          <button
            onClick={() => handleReset('email')}
            disabled={loading}
            className="w-full flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg text-sm font-medium"
          >
            <Mail className="w-4 h-4" /> Gửi qua email
          </button>
          <button
            onClick={() => handleReset('direct')}
            disabled={loading}
            className="w-full flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium"
          >
            <Key className="w-4 h-4" /> Tạo và hiển thị mật khẩu mới
          </button>
        </div>
      </div>
    </div>
  );
}
