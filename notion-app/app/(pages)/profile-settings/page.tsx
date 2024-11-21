import ProfileSettings from '@/components/admin/settings/ProfileSettings'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto py-6 space-y-8">
    <div>
      <ProfileSettings/>
    </div>
  </div>
  )
}

export default page