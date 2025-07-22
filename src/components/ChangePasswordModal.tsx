"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ChangePasswordModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, setIsOpen }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    console.log("Password change requested:", {
      currentPassword,
      newPassword,
    });

    // Close modal after save
    setIsOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Change Password
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 px-2">
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-sm font-medium text-gray-600">
              Current Password
            </Label>
            <Input
              id="current-password"
              type="password"
              value={currentPassword}
              className="h-[51px]"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-sm font-medium text-gray-600">
              New Password
            </Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              className="h-[51px]"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-600">
              Confirm New Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              className="h-[51px]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center pt-6 pb-2">
            <Button
              onClick={handleSave}
              className="bg-red-600 text-base hover:bg-red-700 text-white w-36 rounded-md h-[51px]"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
