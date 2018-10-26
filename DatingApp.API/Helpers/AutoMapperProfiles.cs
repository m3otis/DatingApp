using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoURL, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.isMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetailedDTO>()
                .ForMember(dest => dest.PhotoURL, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.isMain).Url);
                })
                    .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
                
            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}