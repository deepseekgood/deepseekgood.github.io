import { supabase } from './supabase'

export async function saveTestResult(userId, result) {
  if (!userId) return { error: '未登录' }

  const { data, error } = await supabase
    .from('test_records')
    .insert({
      user_id: userId,
      primary_type: result.primaryType,
      secondary_type: result.secondaryType,
      scores: result.scores,
      percentages: result.percentages,
      created_at: new Date().toISOString()
    })
    .select()

  return { data, error }
}

export async function getTestRecords(userId) {
  if (!userId) return { data: [], error: '未登录' }

  const { data, error } = await supabase
    .from('test_records')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  return { data, error }
}

export async function saveAppointment(userId, appointment) {
  if (!userId) return { error: '未登录' }

  const { data, error } = await supabase
    .from('appointments')
    .insert({
      user_id: userId,
      counselor_id: appointment.counselorId,
      counselor_name: appointment.counselorName,
      date: appointment.date,
      time: appointment.time,
      method: appointment.method,
      status: 'pending',
      created_at: new Date().toISOString()
    })
    .select()

  return { data, error }
}

export async function getAppointments(userId) {
  if (!userId) return { data: [], error: '未登录' }

  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  return { data, error }
}
