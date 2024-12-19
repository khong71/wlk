import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-in-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-in-room.component.html',
  styleUrl: './check-in-room.component.scss',
})
export class CheckInRoomComponent {
  // รายชื่อรายวิชา
  subjects = [
    { name: 'วิชาคณิตศาสตร์', id: 1 },
    { name: 'วิชาวิทยาศาสตร์', id: 2 },
    { name: 'วิชาภาษาไทย', id: 3 },
    { name: 'วิชาภาษาอังกฤษ', id: 4 },
    { name: 'วิชาสังคมศึกษา', id: 5 },
  ];

  idx: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    // ดึง id จาก URL
    this.route.paramMap.subscribe((params) => {
      this.idx = +params.get('i')!; // ใช้ id จาก URL
      console.log('Subject ID from URL:', this.idx);
    });
  }

  goBack() {
    this.location.back(); // ย้อนกลับไปหน้าก่อนหน้านี้
  }

  goToSubjectDetail(subject: any) {
    this.router.navigate([`subject/${subject.id}/${this.idx}`]); // ใช้ subject.id และ idx ใน URL
  }
  
}
