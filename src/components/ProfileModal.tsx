import React, { useState } from 'react';
import { User } from '../types';
import { XCircle, UserCircle, Save, Loader2 } from 'lucide-react';

interface ProfileModalProps {
  user: User;
  onClose: () => void;
  onUpdate: () => void;
}

export default function ProfileModal({ user, onClose, onUpdate }: ProfileModalProps) {
  const [saving, setSaving] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName || '');

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // Add update logic here
    setSaving(false);
    onUpdate();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-8 py-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <h2 className="text-xl font-serif italic font-medium">Chỉnh sửa hồ sơ</h2>
          <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors">
            <XCircle className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleUpdate} className="p-8 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
              <UserCircle className="w-4 h-4" /> Họ và tên
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-all"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-grow py-3 px-6 rounded-xl text-stone-500 font-medium hover:bg-stone-50 transition-colors"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-grow flex items-center justify-center gap-2 bg-stone-900 text-white py-3 px-6 rounded-xl hover:bg-stone-800 transition-all font-medium disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
